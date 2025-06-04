import { Component } from '@angular/core';
import { IPost } from '../../src/app/models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-day1';

  postData: IPost[] = [
    {
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1575&q=80',
      title: 'Nature Landscape',
      text: 'Explore the beauty of nature with stunning landscapes that will take your breath away.',
      link: '#',
      active: true
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Cozy Cafe',
      text: 'Discover the perfect spot to relax and enjoy your favorite coffee in a warm atmosphere.',
      link: '#',
      active: false
    },
    {
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
      title: 'Mountain View',
      text: 'Experience the majesty of mountains with panoramic views that inspire adventure.',
      link: '#',
      active: true
    },
    {
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Tech Gadgets',
      text: 'Stay updated with the latest technology trends and innovative gadgets for modern living.',
      link: '#',
      active: false
    },
    {
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Spring Flowers',
      text: 'Celebrate the colors of spring with vibrant flowers that bring joy and freshness to life.',
      link: '#',
      active: true
    },
    {
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80',
      title: 'Gourmet Food',
      text: 'Indulge in culinary delights with exquisite dishes prepared by world-class chefs.',
      link: '#',
      active: true
    }
  ]

}
