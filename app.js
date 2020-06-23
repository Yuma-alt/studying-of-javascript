var vm = new Vue({
    el: '#main',
    data: {
      posts: [
        {
          name: 'title1',		// 記事のタイトル
          url : '//www.example.com',	// 記事のパーマリンク
          categories: ['php'],	// 紐付いてるカテゴリ（複数化）
          display: true	// 表示するか否かの boolean値
        },
        {

        }
      ],
      category_lists: ['html','js','css','php'],	// 全カテゴリ
      preview: []		// チェックボックスでチェックしたカテゴリを格納する
    },
    methods: {
        find_categories: function(){
          var posts = this.posts;
          var preview = this.preview;
    
          if(preview.length > 0) {
            for (var i = 0; i < posts.length; i++) {
              var categories = posts[i].categories;
              for (var j = 0; j < preview.length; j++) {
                if(categories.indexOf(preview[j]) >= 0){
                  posts[i].display = true;
                  break;
                } else {
                  posts[i].display = false;
                }
              }
            }
          } else {
            for (var i = 0; i < posts.length; i++) {
              var categories = posts[i].categories;
              posts[i].display = true;
            }
          }
        }
    }
});