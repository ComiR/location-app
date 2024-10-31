import UIKit

class UserProfileViewController: UIViewController {

    @IBOutlet weak var usernameLabel: UILabel!
    @IBOutlet weak var reputationLabel: UILabel!
    @IBOutlet weak var pointsLabel: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Assuming you have a User data model and a method to get the current user
        let user = getCurrentUser()
        usernameLabel.text = user.username
        reputationLabel.text = "Reputation: \(user.reputation)"
        pointsLabel.text = "Points: \(user.points)"
    }

    private func getCurrentUser() -> User {
        // Replace this with your actual implementation to get the current user
        return User(username: "testuser", reputation: 100, points: 200)
    }

    struct User {
        let username: String
        let reputation: Int
        let points: Int
    }
}
