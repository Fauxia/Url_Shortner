const { URL } = require("../models/urlMode");
const shortId = require("shortid");

const handleUrl = async (req, res) => {
  const id = shortId();
  const body = req.body;
  if (!body.url) return res.status(400).json({ msg: "Url is required" });
  const newUrl = await URL.create({
    shortId: id,
    redirectUrl: body.url,
    totalClicks: [],
  });
  return res.status(201).json({ msg: id });
};

const getHandleId = async (req, res) => {
  const shortId = req.params.id;
  try {
    const gem = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          totalClicks: {
            clicks: Date.now(),
          },
        },
      }
    );
    if (!gem) {
      res.status(404).json({ msg: "url not found" });
    }
    console.log(` data ${gem}`);
    return res.redirect(gem.redirectUrl);
  } catch (err) {
    console.log(`Error ${err.message}`);
  }
};

const getHandleAnalytics = async (req, res) => {
  const shortId = req.params.id;
  try {
    const oneDoc = await URL.findOne({ shortId });
    res.json({ clicks: oneDoc.totalClicks.length });
    console.log(oneDoc);
  } catch (err) {
    console.log(`Error appeared ${err.message}`);
  }
};
module.exports = {
  handleUrl,
  getHandleId,
  getHandleAnalytics,
};
