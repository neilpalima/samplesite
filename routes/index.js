
/*
 * GET home page.
 */

module.exports = {
    index: function(req, res){
      res.render('index');
    },

    partial: function (req, res) {
      var name = req.params.name;
      res.render('partials/partial' + name);
    }
}