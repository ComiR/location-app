import XCTest
@testable import LocationApp

class UserProfileViewControllerTest: XCTestCase {

    var viewController: UserProfileViewController!

    override func setUp() {
        super.setUp()
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        viewController = storyboard.instantiateViewController(withIdentifier: "UserProfileViewController") as? UserProfileViewController
        viewController.loadViewIfNeeded()
    }

    override func tearDown() {
        viewController = nil
        super.tearDown()
    }

    func testUserProfileDisplay() {
        // Assuming you have a User data model and a method to get the current user
        let user = viewController.getCurrentUser()

        XCTAssertEqual(viewController.usernameLabel.text, user.username)
        XCTAssertEqual(viewController.reputationLabel.text, "Reputation: \(user.reputation)")
        XCTAssertEqual(viewController.pointsLabel.text, "Points: \(user.points)")
    }
}
