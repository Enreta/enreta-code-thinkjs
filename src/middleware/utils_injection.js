module.exports = options => {
  return async (ctx, next) => {
    ctx.utils = class {
      static wrapResult (data, status, errMsg) {
        return JSON.stringify({
          status: status,
          err_msg: errMsg,
          version: 'v1',
          result: data
        });
      };
    };
    await next();
  }
};
