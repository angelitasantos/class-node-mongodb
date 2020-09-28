const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
};

indexCtrl.renderManual = (req, res) => {
    res.render('manual')
};

module.exports = indexCtrl;