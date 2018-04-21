'use strict';
angular.
    module('homeDetail').
    component('home',{
        templateUrl: 'home/home.template.html',
        controller: function homeController() {
            var self = this;
            self.list = [];
            self.editEnable = false;
            self.saveItem = function (todo) {
                console.log(todo);
                console.log("Reaching here");
                self.list.push({
                    'listContent': todo,
                    'status': false
                });
                console.log(self.list);
            };

            self.changeStatus = function ($index) {
                console.log("jdcj");
                console.log("index", $index);
                self.list[$index].status = !self.list[$index].status;
            };

            self.editContent = function ($index) {
                self.editEnable=!self.editEnable;
                self.editableListContent = self.list[$index].listContent;
                console.log(self.editableListContent);
                var dum = "#" + $index;
                console.log(dum);
                $(dum).toggle(500);
            };

            self.save = function ($index) {
                self.list[$index].listContent = self.editableListContent;
                self.editEnable = false;
                var dum = "#" + $index;
                $(dum).hide(500);
            };

            self.deleteContent = function ($index) {
                console.log(self.list);
                self.list.splice($index,1);
                console.log(self.list);
            }





        }

    });

