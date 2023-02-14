import mongoose from "mongoose";

export const badRequestHandler = (err, req, res, next) => {
  if (err.status === 400 || err instanceof mongoose.Error.ValidationError) {
    res.status(400).send({ message: err.message });
  } else {
    next(err);
  }
};
export const genericErrorHandler = (err, req, res, next) => {
  res.status(500).send({ message: "we're gonna fix it asap" });
};
