const DataArray = require('../config/constant-array');

// Dashboard Controller ---------------
const DashboardController = async (req, res) => {
  let resp = { status: false, message: 'Oops Samething went wrong?', data: null }
  const url = req.url;
  const data = DataArray.StudentListArray;
  res.render("index", { currentUrl: url, login_user:req.user, data: data, headerTitle: 'Dashboard' });
}

// Dashboard2 Controller ---------------
const Dashboard2Controller = async (req, res) => {
  const url = req.url;
  const data = {salary:DataArray.SalaryListArray, student:DataArray.Student2ListArray};
  res.render("index-2", { currentUrl: url, data: data, login_user:req.user, headerTitle: 'Dashboard 2'});
}

// Dashboard3 Controller ---------------
const Dashboard3Controller = async (req, res) => {
  const url = req.url;
  const data = DataArray.Student3ListArray;
  res.render("index-3", { currentUrl: url, data: data, login_user:req.user, headerTitle: 'Dashboard 3'});
}

module.exports = {
  DashboardController,
  Dashboard2Controller,
  Dashboard3Controller
}
  