import Users from "../models/userModel.js";

//קבלת כל המשתמשים
export const getAllUsers = async (req, res) => {
    let data = await Users.find()
    try {
        if (!data)
            return res.status(404).json({ title: "cannot get all", message: "there are no users" });
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ title: "cannot get all", message: err.message });
    }
}

//id קבלת משתמש לפי 
export const getUserByID = async (req, res) => {
    let { id } = req.params;
    let data = await Users.findById(id)
    try {
        if (!data)
            return res.status(404).json({ title: "cannot get byId", message: "id is not exists" });
        //המאפיין סיסמה לא ניתן לקבלה
        delete data.password;
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ title: "cannot get by id", message: err.message });
    }
}

//הוספת משתמש
export const addUserSignUp = async (req, res) => {
    let body = req.body;
    //required האם נשלחו כל המאפיינים שהם 
    if (!body.userName || !body.password || !body.email)
        return res.status(400).json({ title: "missing parameters", message: "not all necessary parameters were sent" })
    //בדיקה אם המייל תקין
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (body.email && !emailRegex.test(body.email))
        return res.status(404).json({ title: "Email not strong", message: "Email not good" });
    //בדיקה אם הסיסמה תקינה
    const pasRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;;
    if (body.password && !pasRegex.test(body.password))
        return res.status(404).json({ title: "Password not strong", message: "Password should consist of upper and lower case symbols and at least 8 characters" });
    //הוספת המשתמש החדש
    let newUser = new Users(req.body);
    let data = await newUser.save();
    try {
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ title: "error in add new user", message: err.message });
    }
}

//עדכון פרטי משתמש
export const updateUser = async (req, res) => {
    let { id } = req.params;
    let body = req.body;
    //לא ניתן לעדכן סיסמה
    if (body.password)
        delete body.password;
    //אם נשלח מייל בדיקה אם הוא תקין
    const emailRegex = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
    if (body.email && !emailRegex.test(body.email))
        return res.status(404).json({ title: "Email not strong", message: "Email not good" });
    let data = await Users.findByIdAndUpdate(id, body, { new: true });
    try {
        if (!data)
            return res.status(404).json({ title: "error cannot get byId to update", message: "id not defind" });
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ title: "error in update", message: err.message });
    }
}

//עדכון סיסמה
export const updatePassword = async (req, res) => {
    let { id } = req.params;
    let body = req.body
    //אם לא התקבל סיסמה
    if (!body.password)
        return res.status(404).json({ title: "missing password", message: "not send password" });
    //אם הסיסמה חזקה
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;;
    if (body.password && !passwordRegex.test(body.password))
        return res.status(404).json({ title: "Password not strong", message: "Password should consist of upper and lower case symbols and at least 8 characters" });

    let data = await Users.findByIdAndUpdate(id, body, { new: true });
    try {
        if (!data)
            return res.status(404).json({ title: "error cannot get byId to update", message: "id not defind" });
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ title: "error in update password", message: err.message });
    }
}

//קבלת משתמש לפי שם משתמש וסיסמה
export const getUserByLogin = async (req, res) => {
    let { userName, password } = req.body;
    //אם לא התקבל סיסמה או שם משתמש
    if (!userName || !password)
        res.status(400).json({ title: "error in get by login", message: "missing details" });

    let data = await Users.findOne({ userName: userName, password: password });
    try {
        if (!data)
            res.status(400).json({ title: "cannot get by login", message: "no user with such details" });
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ title: "error in get by login", message: err.message });
    }
}
