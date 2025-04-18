const express = require('express');
const { isLoggedIn } = require('../../middleware');
const router = express.Router();
const User = require('../../models/User');

router.post('/products/:productId/like', isLoggedIn, async (req, res) => {
    try {
        const { productId } = req.params;
        const user = await User.findById(req.user._id);
        
        let liked = false;

        if (user.wishlist.includes(productId)) {
            await User.findByIdAndUpdate(req.user._id, { $pull: { wishlist: productId } });
        } else {
            await User.findByIdAndUpdate(req.user._id, { $addToSet: { wishlist: productId } });
            liked = true;
        }

        res.json({ success: true, liked });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
});

module.exports = router;
