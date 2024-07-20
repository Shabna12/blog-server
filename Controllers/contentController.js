const contents = require('../Models/contentModel')


//to add content
exports.addContentController = async(req,res) => {
    console.log("inside add content function");
    const {title,description} = req.body
    const userId = req.payload
    const contentImg = req.file.filename
    console.log(title,description,contentImg,userId);
    try {
        const exisitingContent = await contents.findOne({title})
        if (exisitingContent) {
            res.status(406).josn("Content already in our db !!")
        } else {
            const newContent = new contents({title,description,contentImg,userId})
            await newContent.save()
            res.status(200).json(newContent)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}


// all contents
exports.allContentsController = async (req,res) => {
    console.log("Inside allContents");
    try {
        const allContents = await contents.find()
        res.status(200).json(allContents)
    } catch (err) {
        res.status(401).json(err)
    }
}

//updating
exports.updateContentController = async (req,res) => {
    console.log("Inside updateContentController");
    const {cid} = req.params
    const {title,description,contentImg} = req.body
    const uploadImg = req.file?req.file.filename:contentImg
    const userId = req.payload
    try {
        const updatedContent = await contents.findByIdAndUpdate({_id:cid}, {
            title,description,contentImg:uploadImg,userId
        },{new:true})
        await updatedContent.save()
        res.status(401).json(updatedContent)
    } catch (err) {
        res.status(401).json(err)
    }
}

//delete
exports.deleteContentController = async (req,res) => {
    console.log("Inside deleteContentController");
    const {cid} = req.params
    try {
        const deletedContent = await contents.findByIdAndDelete({_id:cid})
        res.status(200).json(deletedContent)
    } catch (err) {
        res.status(401).json(err)
    }
} 