const router = require("express").Router();
const phonesJson = require("../data/phone.json");

router.get("/", (req, res, next) => {
  const phoneList = phonesJson.map((eachElement) => {
    return {
      name: eachElement.name,
      id: eachElement.id,
    };
  });

  res.json(phoneList);
});

router.get("/:phoneId", (req, res, next) => {
  const phoneById = phonesJson.find(
    (eachElement) => eachElement.id === Number(req.params.phoneId)
  );

  req.json(phoneById);
});

module.exports = router;
