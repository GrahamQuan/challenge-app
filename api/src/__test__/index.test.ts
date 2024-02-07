import request from 'supertest';
import { app } from '../app';

describe('request app', () => {
  it('root / response with a welcome', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('welcome');
  });

  it('/about response with a json', async () => {
    const res = await request(app).get('/about');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      creatorInfo: 'I am Graham Quan, a fullstack developer.',
    });
  });

  it('all non-exist routes response with 404', async () => {
    const res1 = await request(app).get('/404');
    expect(res1.status).toBe(404);
    const res2 = await request(app).get('/non-exist');
    expect(res2.status).toBe(404);
  });
});
