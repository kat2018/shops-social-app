def get_post_data
    post_data ={ 
        post_data = [{
        'superpan'=>{
            :store_name => 'Super Pan',
            :user_id => '',
            :store_id => '',
            user_review: 'Their lunch specials are awesome',
            user_image: 'https://loremflickr.com/300/300/social'
        },
        {
            :store_name => 'Super Pan',
            :user_id => '',
            :store_id => '',
            user_review: 'I love this place! You must try',
            user_image: 'https://loremflickr.com/300/300/social'
        }
        
        }]
    }
    return post_data
end