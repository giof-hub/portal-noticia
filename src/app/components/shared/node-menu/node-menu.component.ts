import { Component, Input } from '@angular/core';
import { Menu } from '../../../models/menu.model';

@Component({
  selector: 'app-node-menu',
  templateUrl: './node-menu.component.html',
  styleUrl: './node-menu.component.scss'
})
export class NodeMenuComponent {

  @Input() data: Menu;
  @Input() trigger = "Trigger";
  @Input() isRootNode = false;

  isExpandable(node: Menu): boolean {
    return node.subMenu != null && node.subMenu.length > 0;
  }
}
