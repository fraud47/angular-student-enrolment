import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
interface MenuItem {
  icon: string;
  label: string;
  href: string;
  visible: string[];
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() role: string = '';

  menuItems: MenuGroup[] = [
    {
      title: 'MENU',
      items: [
        { icon: '/home.png', label: 'Home', href: '/', visible: ['admin', 'teacher', 'student', 'parent'] },
        { icon: '/teacher.png', label: 'Teachers', href: '/teachers', visible: ['admin', 'teacher'] },
        { icon: '/student.png', label: 'Students', href: '/students', visible: ['admin', 'teacher'] },
        
        
       
       
      ]
    },
    
  ];
}
