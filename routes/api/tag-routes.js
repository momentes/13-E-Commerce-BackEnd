const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
router.get('/', async (req, res) => {
  

  try{
    const tagsData = await Tag.findAll(
      {include:[{model: Product}]}
    );
    res.status(200).json(tagsData);
  } catch(err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try{
    const tagsData = await Tag.findByPk(req.params.id,{
      include: [{model:Product}]
    });
    if(!tagsData){
      res.status(404).json({message: 'No tags found with this id'});
    };
    res.status(200).json(tagsData);
  }catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag

  try{
    const tagsData = await Tag.create(req.body);
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err);
  }

});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => { 
  try{
    const tagsData = await Tag.update({
      tag_name : req.body.tag_name
    },
    {
      where: {id : req.params.id}
    });

    res.status(200).json({message: `tag updated successful`});
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  
  try {
    const tagsData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagsData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json({message:`delete successfully`});
  } catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;
