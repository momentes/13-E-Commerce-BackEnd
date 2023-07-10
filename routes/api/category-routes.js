const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories`
// find all categories
router.get('/', async (req, res) => {
  try{
    const categoriesData = await Category.findAll(
      {include:[{model: Product}]}
    );
    res.status(200).json(categoriesData);
  } catch(err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get('/:id', async(req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{model:Product}]
    });
    if(!categoryData){
      res.status(404).json({message: 'No category found with this id'});
    };
    res.status(200).json(categoryData);
  }catch(err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try{
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  
  try{
    await Category.update({
      category_name : req.body.category_name
    },
    {
      where: {id : req.params.id}
    });

    res.status(200).json({message: `category updated successfully`});
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteCategory) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json({message:`delete successfully`});
  } catch (err) {
    res.status(500).json({message:err});
  }
});

module.exports = router;
