import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoading = false;
  navError = false;
  currentPage = 'home';

  async navigateTo(page: string) {
    try {
      this.isLoading = true;
      this.navError = false;
      // Simulate navigation delay
      await new Promise(resolve => setTimeout(resolve, 500));
      this.currentPage = page;
    } catch (error) {
      this.navError = true;
      console.error('Navigation error:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
