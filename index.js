import express, { urlencoded } from 'express';
const app = express();

app.get("/registrasi", RegistrasiController)
app.post("/registrasi", dbRegistrasiController)

app.get("/login", loginController)
app.post("/login", dbloginController)

app.get("/logout", logoutController)

app.get("/loginadmin", adminloginController)
app.post("/loginadmin", dbadminloginController)
app.get("/logout", logoutadminController)

app.listen(3000, () => {
    console.log("app berjalan dengan baik")
})