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

    await renderMedia({
      serveUrl,
      composition,
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