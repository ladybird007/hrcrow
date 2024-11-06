document.addEventListener('DOMContentLoaded', function () {
  const moreFiltersBtn = document.querySelector('.js-more-filters-btn'),
        moreFilters = document.querySelector('.js-more-filters'),
        moreFiltersHeight = document.querySelector('.js-more-filter-height').clientHeight,
        moreFiltersBtnText = document.querySelector('.js-more-filters-text');
  
  moreFilters.style.height = moreFiltersHeight + 'px';

  if (moreFiltersBtn) {
    moreFiltersBtn.addEventListener('click', function () {
      if (moreFilters.classList.contains('opened')) {
        moreFiltersBtn.classList.remove('opened');
        moreFiltersBtnText.innerHTML = "More";
        moreFilters.classList.remove('opened');
        moreFilters.style.height = '0';
      } else {
        moreFiltersBtn.classList.add('opened');
        moreFiltersBtnText.innerHTML = "Less";
        moreFilters.classList.add('opened');
        moreFilters.style.height = moreFiltersHeight + 'px';
      }
    })
  }

});