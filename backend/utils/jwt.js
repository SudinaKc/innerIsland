// import jwt from 'jsonwebtoken';
// import CryptoJS from 'crypto-js';

// export const generateSecretKey = () => {
//   const secretKey = CryptoJS.lib.WordArray.random(32).toString();
//   return secretKey;
// };

// export const generateToken = (userId,secretKey) => {
//   const token = jwt.sign({ userId }, 'innerIsland', { expiresIn: '1h' });
//   return token;    
// };

// // export const verifyToken = (token) => {
// //   try {
// //     const decoded = jwt.verify(token, 'your_secret_key');
// //     return decoded.userId;
// //   } catch (error) {
// //     throw new Error('Invalid token');
// //   }
// // };


