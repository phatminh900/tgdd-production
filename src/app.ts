import path from "path";
import express from "express";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import xss from "xss";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import log from "utils/logger";
import connect from "utils/connect";
import routes from "routesMiddleware";
import Review from "models/review.model";
import User from "models/user.model";
import { omit } from "lodash";
import Phone from "models/phone.model";
import Laptop from "models/laptop.model";
import Product from "models/product.model";
import Booking from "models/booking.model";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "script-src": ["'self'", "https://cdnjs.cloudflare.com/"],
      },
    },
  })
);
app.use(cors());
// limit requests from 1 IPT

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP. try again in 1 hour",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use("/api", limiter);

// // body-parse,reading from body to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
// // Data sanitization against Nosql injection
app.use(mongoSanitize());
// // Data sanitization against XXS
const html = '<script>alert("xss");</script>';
// app.use(xss(html));

// Prevent parameter pollution

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// static file
// public not in src fixed it
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.static(path.join(__dirname, "./client")));

// (async () => {
//   const phones = await Phone.find();
//   const laptops = await Laptop.find();
//   const phoneIds = phones.map((phone) => ({
//     // productId: new mongoose.mongo.ObjectId(phone.id),
//     _id: phone.id,
//     productId: phone.id,
//     title: phone.title,
//     category: phone.category,
//     price: phone.price,
//     imgCover: phone.imgCover,
//     slug: phone.slug,
//   }));
//   const laptopsIds = laptops.map((laptop) => ({
//     // productId: new mongoose.mongo.ObjectId(laptop.id),
//     _id: laptop.id,
//     productId: laptop.id,
//     title: laptop.title,
//     category: laptop.category,
//     price: laptop.price,
//     imgCover: laptop.imgCover,
//     slug: laptop.slug,
//   }));
//   await Product.deleteMany();
//   await Product.create([...phoneIds, ...laptopsIds]);
// })();
// app.use(express.static(path.join()))

// app.use(compression())
// const port = process.env.PORT || 3002;
// app.listen(port, () => {
//   debugger;
//   log.info(`App running at port ${port}`);

//   connect();
//   routes(app);

//   // (async () => {
//   //   const phones = await Products.find();
//   //   // @ts-ignore
//   //   phones.map(
//   //     (phone) =>
//   //       // @ts-ignore
//   //       (phone.ratingQuantity = 0)
//   //     // (phone.ratingAverage = 0)
//   //   );
//   //   phones.forEach(async (phone) => await phone.save());
//   //   // @ts-ignore
//   //   await Review.deleteMany();
//   //   await Booking.deleteMany();
//   //   await User.deleteMany();
//   //   console.log("DELETED");
//   // })();
//   // (async () => {
//   //   const phones = await Phone.find();
//   //   phones.forEach((phone) => (phone.prices = undefined));
//   //   phones.forEach(async (phone) => await phone.save());
//   // })();
//   // ??????Add to Products
// (async () => {
//   const phones = await (
//     await Phone.find(
//       {},
//       {
//         title: 1,
//         ratingAverage: 1,
//         category: 1,
//         slug: 1,
//         price: 1,
//         imgCover: 1,
//         original: 1,
//         ratingQuantity: 1,
//         _id: 1,
//       }
//     )
//   ).map((phone) => {
//     phone.isNew = true;
//     return phone;
//   });

//   const laptops = await (
//     await Laptop.find(
//       {},
//       {
//         title: 1,
//         category: 1,
//         slug: 1,
//         price: 1,
//         imgCover: 1,
//         original: 1,

//         ratingAverage: 1,
//         ratingQuantity: 1,
//       }
//     )
//   ).map((laptop) => {
//     laptop.isNew = true;
//     return laptop;
//   });
//   console.log(phones);
//   // .map((phone) => (phone.isNew = true));
//   await Product.deleteMany();
//   const product = await Product.create([...phones, ...laptops]);
//   // @ts-ignore
//   // phones.map(
//   // (phone) =>
//   // @ts-ignore
//   // (phone.promote = undefined)
//   // );
//   // phones.forEach(async (phone) => await phone.save());
//   // @ts-ignore
//   // phones = await phones.save();
//   // await Review.deleteMany();

//   console.log("DELETED");
// })()
//   // data img
//   // async () => {
//   //   const phones = await Laptop.find();
//   //   console.log(phones);
//   //   // @ts-ignore
//   //   phones.map(
//   //     (phone) =>
//   //       // @ts-ignore
//   //       (phone.configuration.special = "C?? ????n b??n ph??m")
//   //     //   (phone.generalInformation = [
//   //     //     ` M???i l???n ra m???t phi??n b???n m???i l?? m???i l???n iPhone chi???m s??ng tr??n kh???p c??c
//   //     // m???t tr???n v?? l???n n??y c??i t??n khi???n v?? s??? ng?????i "s???c s??i" l?? iPhone 13
//   //     // Pro, chi???c ??i???n tho???i th??ng minh v???n gi??? nguy??n thi???t k??? cao c???p, c???m 3
//   //     // camera ???????c n??ng c???p, c???u h??nh m???nh m??? c??ng th???i l?????ng pin l???n ???n t?????ng.`,
//   //     //     `Thi???t k??? ?????c tr??ng v???i m??u s???c th???i th?????ng`,
//   //     //     `iPhone 13 Pro kh??ng c?? nhi???u s??? thay ?????i v??? thi???t k???, khi m??y v???n s??? h???u
//   //     //   ki???u d??ng t????ng t??? nh?? ??i???n tho???i iPhone 12 Pro v???i c??c c???nh vi???n vu??ng
//   //     //   v???n v?? hai m???t k??nh c?????ng l???c cao c???p. S??? h???u 5 phi??n b???n m??u g???m xanh
//   //     //   d????ng, b???c, v??ng ?????ng, x??m v?? xanh l?? cho b???n t??y ch???n theo s??? th??ch c???a
//   //     //   m??nh`,
//   //     //   ])
//   //   );
//   //   // @ts-ignore
//   //   phones.forEach(async (phone) => await phone.save());
//   //   // phones = await phones.save();
//   //   // await Review.deleteMany();

//   //   console.log("DELETED");
//   // };
// });
export default app;
