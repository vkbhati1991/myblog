require("../model/Artist");

const router = require("express").Router();
const mongoose = require("mongoose");
const getAppModel = require("../utils");
const pageType = require("../constant");
const upload = require("../dataAccessLayer/multer");

const Artist = mongoose.model("Artist");


/**
 * Get All  data in Array form
 */
router.get("/", async (req, res) => {
    const artistList = await Artist.find({});
    const appModel = getAppModel(pageType.ARTIST_LIST, { artistList: artistList });
    //res.render("index", { appModel });

    res.send(artistList);
});

router.get("/:artistId", async (req, res) => {
    const artist = await Artist.findById({ _id: req.params.artistId });
    //const appModel = getAppModel(pageType.ARTIST_LIST, { artistList: artistList });
    //res.render("index", { appModel });

    res.send(artist);
});

router.get("/create-artist", (req, res) => {
    const appModel = getAppModel(pageType.ARTIST_CREATE, { artist: null, edit: false });
    res.render("index", { appModel });
});

router.get("/:artistId/edit_artist", async (req, res) => {
    const artist = await Category.findById({ _id: req.params.artistId });
    const appModel = getAppModel(pageType.ARTIST_CREATE, { artist: artist, edit: true });
    res.render("index", { appModel });
});

/**
 * Create Record
 */

router.post("/create_artist", upload.single("image"), async (req, res) => {
    const artist = new Artist();
    const body = req.body;

    artist.fullName = body.fullName;
    artist.email = body.email;
    artist.mobile = body.mobile;
    artist.imageUrl = req.file && req.file.filename;
    artist.dob = body.dob;
    artist.speciality = body.speciality;
    artist.website = body.website;
    artist.address = body.address;
    artist.aboutus = body.aboutus;

    await artist.save();
    res.send(artist);
});

/**
 * Update/Edit Record
 */

router.put("/:artistId", upload.single("image"), async (req, res) => {

    const artistToBeUpdated = await Artist.findByIdAndUpdate({ _id: req.params.artistId }, req.body, {
        new: true
    });

    await artistToBeUpdated.save();
    res.send(artistToBeUpdated);
});

/**
 * Delete Record
 */
router.delete("/:artistId", async (req, res) => {
    const artistToBeDeleted = await Artist.findByIdAndRemove({ _id: req.params.artistId });

    if (artistToBeDeleted) {
        res.send({
            status: 200,
            message: "Record Deleted Successfully",
            record: artistToBeDeleted
        });
    }

    res.send({
        status: 500,
        message: "Record not Deleted"
    });

});

module.exports = router;