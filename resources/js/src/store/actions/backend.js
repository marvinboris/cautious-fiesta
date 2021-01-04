import * as actionTypes from './actionTypes';

const prefix = '/api/';



export const resetAdmins = () => ({ type: actionTypes.ADMINS_RESET });
const adminsStart = () => ({ type: actionTypes.ADMINS_START });
const adminsSuccess = data => ({ type: actionTypes.ADMINS_SUCCESS, ...data });
const adminsFail = error => ({ type: actionTypes.ADMINS_FAIL, error });
export const getAdmins = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/admins?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const getAdmin = id => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/admins/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const postAdmins = data => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/admins`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const patchAdmins = (id, data) => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/admins/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const deleteAdmins = id => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/admins/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};



export const resetCategories = () => ({ type: actionTypes.CATEGORIES_RESET });
const categoriesStart = () => ({ type: actionTypes.CATEGORIES_START });
const categoriesSuccess = data => ({ type: actionTypes.CATEGORIES_SUCCESS, ...data });
const categoriesFail = error => ({ type: actionTypes.CATEGORIES_FAIL, error });
export const getCategories = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(categoriesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/categories?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};

export const getCategory = id => async (dispatch, getState) => {
    dispatch(categoriesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/categories/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};

export const postCategories = data => async (dispatch, getState) => {
    dispatch(categoriesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/categories`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};

export const patchCategories = (id, data) => async (dispatch, getState) => {
    dispatch(categoriesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/categories/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};

export const deleteCategories = id => async (dispatch, getState) => {
    dispatch(categoriesStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/categories/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};



export const resetCms = () => ({ type: actionTypes.CMS_RESET });
const cmsStart = () => ({ type: actionTypes.CMS_START });
const cmsSuccess = data => ({ type: actionTypes.CMS_SUCCESS, ...data });
const cmsFail = error => ({ type: actionTypes.CMS_FAIL, error });
export const getCms = () => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/cms`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};

export const postCms = data => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/cms`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};

export const patchCms = (id, data) => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/cms/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};

export const deleteCms = id => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/cms/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};



export const resetDashboard = () => ({ type: actionTypes.DASHBOARD_RESET });
const dashboardStart = () => ({ type: actionTypes.DASHBOARD_START });
const dashboardSuccess = data => ({ type: actionTypes.DASHBOARD_SUCCESS, ...data });
const dashboardFail = error => ({ type: actionTypes.DASHBOARD_FAIL, error });
export const getDashboard = () => async (dispatch, getState) => {
    dispatch(dashboardStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/dashboard`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(dashboardSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(dashboardFail(error));
    }
};



export const resetDrivers = () => ({ type: actionTypes.DRIVERS_RESET });
const driversStart = () => ({ type: actionTypes.DRIVERS_START });
const driversSuccess = data => ({ type: actionTypes.DRIVERS_SUCCESS, ...data });
const driversFail = error => ({ type: actionTypes.DRIVERS_FAIL, error });
export const getDrivers = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(driversStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/drivers?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(driversSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(driversFail(error));
    }
};

export const getDriver = id => async (dispatch, getState) => {
    dispatch(driversStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/drivers/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(driversSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(driversFail(error));
    }
};

export const getDriversInfo = () => async (dispatch, getState) => {
    dispatch(driversStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/drivers/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(driversSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(driversFail(error));
    }
};

export const postDrivers = data => async (dispatch, getState) => {
    dispatch(driversStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/drivers`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(driversSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(driversFail(error));
    }
};

export const patchDrivers = (id, data) => async (dispatch, getState) => {
    dispatch(driversStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/drivers/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(driversSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(driversFail(error));
    }
};

export const deleteDrivers = id => async (dispatch, getState) => {
    dispatch(driversStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/drivers/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(driversSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(driversFail(error));
    }
};



export const resetFeatures = () => ({ type: actionTypes.FEATURES_RESET });
const featuresStart = () => ({ type: actionTypes.FEATURES_START });
const featuresSuccess = data => ({ type: actionTypes.FEATURES_SUCCESS, ...data });
const featuresFail = error => ({ type: actionTypes.FEATURES_FAIL, error });
export const getFeatures = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/features?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const getFeature = id => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/features/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const postFeatures = data => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/features`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const patchFeatures = (id, data) => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/features/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const deleteFeatures = id => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/features/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};



export const resetLanguages = () => ({ type: actionTypes.LANGUAGES_RESET });
const languagesStart = () => ({ type: actionTypes.LANGUAGES_START });
const languagesSuccess = data => ({ type: actionTypes.LANGUAGES_SUCCESS, ...data });
const languagesFail = error => ({ type: actionTypes.LANGUAGES_FAIL, error });
export const getLanguages = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/languages?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const getLanguage = id => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/languages/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const postLanguages = data => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/languages`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const patchLanguages = (id, data) => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/languages/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const deleteLanguages = id => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/languages/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};



export const resetRoles = () => ({ type: actionTypes.ROLES_RESET });
const rolesStart = () => ({ type: actionTypes.ROLES_START });
const rolesSuccess = data => ({ type: actionTypes.ROLES_SUCCESS, ...data });
const rolesFail = error => ({ type: actionTypes.ROLES_FAIL, error });
export const getRoles = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const getRole = id => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const getRolesInfo = () => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const postRoles = data => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/roles`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const patchRoles = (id, data) => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/roles/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const deleteRoles = id => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};



export const resetUsers = () => ({ type: actionTypes.USERS_RESET });
const usersStart = () => ({ type: actionTypes.USERS_START });
const usersSuccess = data => ({ type: actionTypes.USERS_SUCCESS, ...data });
const usersFail = error => ({ type: actionTypes.USERS_FAIL, error });
export const getUsers = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const getUser = id => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const getUsersInfo = () => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const postUsers = data => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/users`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const patchUsers = (id, data) => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/users/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const deleteUsers = id => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};