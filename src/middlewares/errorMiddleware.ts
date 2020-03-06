import { Context, Next } from 'koa';

export default async (ctx: Context, next: Next): Promise<void> => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;

    if (ctx.status >= 500) {
      err.message = 'Erro interno do servidor';
      console.error(`${err.message}: `, err);
    }

    ctx.body = {
      status: false,
      message: err.message,
      errors: err.errors || [err.message]
    };
  }
};
