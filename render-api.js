const express = require('express');
const { renderMedia } = require('@remotion/renderer');
const path = require('path');

const app = express();
app.use(express.json());

app.post('/render', async (req, res) => {
  try {
    const { composition, inputProps, outputName } = req.body;
    const serveUrl = 'file://' + path.resolve('./'); // points to Remotion project root
    const outputLocation = path.resolve('./output', outputName || 'video.mp4');

    // Fetch available compositions to validate
    const comps = await getCompositions(serveUrl, { inputProps });
    console.log(comps)
    const comp = comps.find((c) => c.id === composition);

    if (!comp) {
      return res.status(400).json({ success: false, error: `Composition "${composition}" not found. Available: ${comps.map(c => c.id).join(', ')}` });
    }

    await renderMedia({
      serveUrl,
      composition: comp.id,
      inputProps,
      codec: 'h264',
      outputLocation,
    });

    res.json({ success: true, output: outputLocation });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.RENDER_API_PORT || 4000;
app.listen(PORT, () => {
  console.log(`Remotion Render API listening on port ${PORT}`);
});