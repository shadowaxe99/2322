const request = require('supertest');
const app = require('../server/index.js');

describe('Integration Tests', () => {
  // User Authentication
  test('It should authenticate user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'test',
        password: 'test'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  // Dashboard
  test('It should fetch dashboard data', async () => {
    const res = await request(app)
      .get('/api/dashboard')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  // RCM for Medical Billing
  test('It should verify insurance', async () => {
    const res = await request(app)
      .post('/api/rcm/verify')
      .set('Authorization', `Bearer ${token}`)
      .send({
        insuranceId: '12345'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
  });

  // Social Media Hub
  test('It should fetch social mentions', async () => {
    const res = await request(app)
      .get('/api/social/mentions')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('mentions');
  });

  // SEO-M for Event Planning
  test('It should fetch web page interactions', async () => {
    const res = await request(app)
      .get('/api/seo/interactions')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('interactions');
  });

  // Health & Well-Being
  test('It should fetch sleep cycle analysis', async () => {
    const res = await request(app)
      .get('/api/health/sleep')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('analysis');
  });
});