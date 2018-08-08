require 'test_helper'

class Api::StoresControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_stores_index_url
    assert_response :success
  end

  test "should get show" do
    get api_stores_show_url
    assert_response :success
  end

  test "should get create" do
    get api_stores_create_url
    assert_response :success
  end

  test "should get update" do
    get api_stores_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_stores_delete_url
    assert_response :success
  end

end
