/**
 * @copyright: Copyright (c) 2015-2016 http://www.dataoffice.cn All rights reserved.
 * @licenses: Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * @version: v1.0
 * @author: fengchengfeng
 * @email: fengchengfeng0805@gmail.com
 * @date: 2016-12-02 11:41:20
 */
 $(document).ready(function() {
 	/*
 	 *定义变量
 	 */
 	var userHeadImageURL;
 	var userName;
 	var commentContent;
 	var time;
 	/*
 	 *获取点击图片URL，保存用户头像URL
 	 */
 	$('.images img').click(function(){
 		userHeadImageURL = $(this).attr('src');
 		$('.alert1').hide();
 	});
 	/*
 	 *获取用户名，保存用户名
 	 */
 	$('.user-name').keyup(function() {
 		userName = $(this).val();
 		if (userName) {
 			$('.alert2 button')
 			.css('color','#000')
 			.click(function() {
 				$('.alert2,.opacity').hide();
 				$('#userHeadImage').attr('src',userHeadImageURL);
 				$('#userName').text(userName);
 			});
 		}
 	});
 	/*
 	 *获取用户输入内容，保存用户输入内容
 	 */
 	$('textarea').keyup(function() {
 		commentContent = $(this).val();
 		wordCount(commentContent);
 		if (commentContent) {
 			$('.chat-box button')
 			.css('background-color','#f00')
 		}
 	});
 	/*
 	 *处理内容提交事件，清空输入框
 	 */
 	$('.chat-box button').click(function() {
 				time = submitTime();
 				addComment(userHeadImageURL,userName,commentContent,time);
 				$('textarea').val('');
 			});
 	/*
 	 *剩余指数统计函数
 	 */
 	function wordCount(commentContent) {
 		$('#message').text(140-commentContent.length);
 	}
 	/*
 	 *获取内容提交时间
 	 */
 	function submitTime() {
 		var d = new Date();
 		var year = d.getFullYear();
 		var mon = d.getMonth()+1;
 		var day = d.getDate();
 		var min = d.getHours() + ':' + d.getMinutes();
 		var tmpTime = year+'年'+mon+'月'+day+'日'+ min;
 		return tmpTime;
 	}
 	/*
 	 *拼凑HTML，插入HTML
 	 */
 	function addComment(userHeadImageURL,userName,commentContent,time) {
 		var comment = '<div class="comment"><div class="user-info"><img src="'+userHeadImageURL+'"><p>'+userName+'</p></div><div class="comment-content"><p>'+commentContent+'</p><span>'+time+'</span></div></div>';
 		$('.container').prepend(comment);
 	}
 });
 