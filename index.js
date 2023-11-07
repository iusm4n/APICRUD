
$(document).ready(function () {
    $('#get-posts').click(function () {
        $.ajax({
            url: baseUrl,
            method: 'GET',
            success: function (data) {
                $('#output').html('All posts: ' + JSON.stringify(data));
            },
            error: function (error) {
                $('#output').html('Error fetching posts: ' + JSON.stringify(error));
            }
        });
    });

    $('#create-post').click(function () {
        const newPost = {
            title: 'New Post',
            body: 'This is a new post.',
        };

        $.ajax({
            url: baseUrl,
            method: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(newPost),
            success: function (data) {
                $('#output').html('New post created: ' + JSON.stringify(data));
            },
            error: function (error) {
                $('#output').html('Error creating post: ' + JSON.stringify(error));
            }
        });
    });

    $('#update-post').click(function () {
        const postId = 1; // Replace with the ID of the post to update
        const updatedPost = {
            title: 'Updated Post',
            body: 'This post has been updated.',
        };

        $.ajax({
            url: baseUrl + '/' + postId,
            method: 'PUT',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(updatedPost),
            success: function (data) {
                $('#output').html('Post updated: ' + JSON.stringify(data));
            },
            error: function (error) {
                $('#output').html('Error updating post: ' + JSON.stringify(error));
            }
        });
    });

    $('#delete-post').click(function () {
        const postId = 1; // Replace with the ID of the post to delete

        $.ajax({
            url: baseUrl + '/' + postId,
            method: 'DELETE',
            success: function () {
                $('#output').html('Post deleted successfully');
            },
            error: function (error) {
                $('#output').html('Error deleting post: ' + JSON.stringify(error));
            }
        });
    });
});