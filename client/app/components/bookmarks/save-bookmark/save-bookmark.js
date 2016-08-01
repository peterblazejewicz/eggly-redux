import angular from 'angular';
import './save-bookmark.styl';

class SaveController {
  $onChanges() {
    this.editedBookmark = Object.assign({}, this.bookmark);
  }
}

const saveBookmarkComponent = {
  bindings: {
    bookmark: '<',
    save: '&',
    cancel: '&'
  },
  template: `
    <div class="save-bookmark">
      <h4 ng-if="!saveBookmarkCtrl.bookmark.id">Create a bookmark in
        <span class="text-muted">{{saveBookmarkCtrl.bookmark.category}}</span>
      </h4>
      <h4 ng-if="saveBookmarkCtrl.bookmark.id">Editing {{saveBookmarkCtrl.bookmark.title}}</h4>
    
      <form class="edit-form" role="form" novalidate
        ng-submit="saveBookmarkCtrl.save({bookmark:saveBookmarkCtrl.editedBookmark})" >
        <div class="form-group">
          <label>Bookmark Title</label>
          <input type="text" class="form-control" ng-model="saveBookmarkCtrl.editedBookmark.title" placeholder="Enter title">
        </div>
        <div class="form-group">
          <label>Bookmark URL</label>
          <input type="text" class="form-control" ng-model="saveBookmarkCtrl.editedBookmark.url" placeholder="Enter URL">
        </div>
        <button type="submit" class="btn btn-info btn-lg">Save</button>
        <button type="button" class="btn btn-default btn-lg pull-right" ng-click="saveBookmarkCtrl.cancel()">Cancel</button>
      </form>
    </div>
  `,
  controller: SaveController,
  controllerAs: 'saveBookmarkCtrl'
};

const SaveBookmarkModule = angular.module('saveBookmark', [])
  .component('saveBookmark', saveBookmarkComponent);

export default SaveBookmarkModule;