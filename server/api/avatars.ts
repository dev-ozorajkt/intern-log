const data = [
    { id: 'avatar001', url: 'https://res.cloudinary.com/ozrcloud/image/upload/v1664442905/daily-log/scenery004_q2nnc0.png' },
    { id: 'avatar002', url: 'https://res.cloudinary.com/ozrcloud/image/upload/v1664442905/daily-log/scenery002_aylrty.png' },
    { id: 'avatar003', url: 'https://res.cloudinary.com/ozrcloud/image/upload/v1664442905/daily-log/scenery003_y8lodi.png' },
    { id: 'avatar004', url: 'https://res.cloudinary.com/ozrcloud/image/upload/v1664442905/daily-log/scenery001_k0kyd7.png' },
    { id: 'avatar005', url: 'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__340.jpg' },
    { id: 'avatar006', url: 'https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { id: 'avatar007', url: 'https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189__340.jpg' },
    { id: 'avatar008', url: 'https://cdn.pixabay.com/photo/2013/06/30/18/56/butterfly-142506__340.jpg' },
    { id: 'avatar009', url: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  ]
  
  export default defineEventHandler(async (event) => {
    return data
  })