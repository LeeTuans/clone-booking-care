const db = require('../models/index');
const CrudService = require('../services/CrudService');

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getAboutPage = (req, res) => {

}

let getCrud = async (req, res) => {
    try {
        return res.render('crud.ejs');
    } catch (e) {
        console.log(e);
    }
}

let postCrud = async (req, res) => {
    try {
        await CrudService.createNewUser(req.body);
        return res.send('create new user succeed');
    } catch (e) {
        console.log(e);
    }
}

let showCrud = async (req, res) => {
    try {
        let data = await CrudService.getAllUser();
        return res.render('displaycrud.ejs', {
            data: data
        });
    } catch (e) {
        console.log(e);
    }
}

let gerEditCrud = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CrudService.getUserInforById(userId);

        return res.render('editCrud.ejs', {
            user: userData
        });
    } else {
        return res.send('Not found');
    }
}

let putCrud = async (req, res) => {
    let data = req.body;
    await CrudService.updateUserData(data);

    return res.redirect('/get-crud');
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('delete user succeed')
    }
    else {
        return res.send('user not found')
    }
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCrud: getCrud,
    postCrud: postCrud,
    showCrud: showCrud,
    gerEditCrud: gerEditCrud,
    putCrud: putCrud,
    deleteCRUD: deleteCRUD
};