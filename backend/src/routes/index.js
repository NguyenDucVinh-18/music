const musicRouter = require("./music");
const accountRouter = require("./account");
const categoriesRouter = require("./category");
const profileRouter = require("./profile");

function route(app) {
  app.use("/home", (req, res) => {
    res.send("Hello anh em f8");
  });
  app.use("/songs", musicRouter);
  app.use("/account", accountRouter);
  app.use("/categories", categoriesRouter);
  app.use("/profile", profileRouter);
}

module.exports = route;
