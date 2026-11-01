import './sources.css';
import type { NewsSource } from '../../../types';

class Sources {
  public draw(data: ReadonlyArray<Readonly<NewsSource>>): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
    const sourcesContainer = document.querySelector<HTMLElement>('.sources');

    if (!sourceItemTemp || !sourcesContainer) {
      console.error('Sources template or container not found');
      return;
    }

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

      const name = sourceClone.querySelector<HTMLElement>('.source__item-name');
      const sourceItem = sourceClone.querySelector<HTMLElement>('.source__item');

      if (!name || !sourceItem) {
        console.error('Source template is missing required elements');
        return;
      }

      name.textContent = item.name;
      sourceItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    sourcesContainer.append(fragment);
  }
}

export default Sources;
