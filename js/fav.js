
document.addEventListener('DOMContentLoaded', function() {
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal', 'fade');
    modalDiv.id = 'exampleModal';
    modalDiv.tabIndex = '-1';
    modalDiv.setAttribute('aria-labelledby', 'exampleModalLabel');
    modalDiv.setAttribute('aria-hidden', 'true');
  
    const modalDialogDiv = document.createElement('div');
    modalDialogDiv.classList.add('modal-dialog');
  
    const modalContentDiv = document.createElement('div');
    modalContentDiv.classList.add('modal-content');
  
    const modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.classList.add('modal-header');
  
    const modalTitleH1 = document.createElement('h1');
    modalTitleH1.classList.add('modal-title', 'fs-5');
    modalTitleH1.id = 'exampleModalLabel';
    modalTitleH1.textContent = 'Favourites';
  
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');
  
    modalHeaderDiv.appendChild(modalTitleH1);
    modalHeaderDiv.appendChild(closeButton);
  
    const modalBodyDiv = document.createElement('div');
    modalBodyDiv.classList.add('modal-body');
    //modalBodyDiv.textContent = 'Tutaj będą znajdować się ulubione przedmioty.';
    const favouritesContainer = document.createElement('div');
    favouritesContainer.classList.add('favouritesContainer');

    modalBodyDiv.appendChild(favouritesContainer);


    const modalFooterDiv = document.createElement('div');
    modalFooterDiv.classList.add('modal-footer');
  
    const closeButtonFooter = document.createElement('button');
    closeButtonFooter.type = 'button';
    closeButtonFooter.classList.add('btn', 'btn-secondary');
    closeButtonFooter.setAttribute('data-bs-dismiss', 'modal');
    closeButtonFooter.textContent = 'Close';
  
    const saveChangesButton = document.createElement('button');
    saveChangesButton.type = 'button';
    saveChangesButton.classList.add('btn', 'btn-primary');
    saveChangesButton.textContent = 'Save changes';
  
    modalFooterDiv.appendChild(closeButtonFooter);
    modalFooterDiv.appendChild(saveChangesButton);
  
    modalContentDiv.appendChild(modalHeaderDiv);
    modalContentDiv.appendChild(modalBodyDiv);
    modalContentDiv.appendChild(modalFooterDiv);
  
    modalDialogDiv.appendChild(modalContentDiv);
  
    modalDiv.appendChild(modalDialogDiv);
  
    // Dodawanie modala do drzewa dokumentu
    const body = document.querySelector('body');
    body.appendChild(modalDiv);
  });
  
