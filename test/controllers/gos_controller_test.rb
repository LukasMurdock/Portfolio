require "test_helper"

class GosControllerTest < ActionDispatch::IntegrationTest
  test "should get inst" do
    get gos_inst_url
    assert_response :success
  end

  test "should get gos" do
    get gos_gos_url
    assert_response :success
  end
end
