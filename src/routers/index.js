const express = require("express");
const Router = require("express");
const cors = require("cors");
const compression = require("compression");
const app = express();

module.exports = function ({
  AccesoRoutes,
  CategoriaRoutes,
  FacturaRoutes,
  LocalRoutes,
  ProfileRoutes,
  TarifaRoutes,
  TipoVehiculoRoutes,
  UserRoutes,
  VehiculoRoutes,
}) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors({ origin: true, credentials: true }))
    .use(app.use(express.json()))
    .use(compression());

  apiRoute.use("/acceso", AccesoRoutes);
  apiRoute.use("/categoria", CategoriaRoutes);
  apiRoute.use("/factura", FacturaRoutes);
  apiRoute.use("/local", LocalRoutes);
  apiRoute.use("/profile", ProfileRoutes);
  apiRoute.use("/tarifa", TarifaRoutes);
  apiRoute.use("/tipoVehiculo", TipoVehiculoRoutes);
  apiRoute.use("/user", UserRoutes);
  apiRoute.use("/Vehiculo", VehiculoRoutes);
  /* apiRoute.use("/auth", AuthAPIRoutes); */
  router.use("/api", apiRoute);

  return router;
};
