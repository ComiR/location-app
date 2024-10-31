import UIKit

class LocationListViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {

    @IBOutlet weak var tableView: UITableView!

    var locations: [Location] = []

    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        tableView.delegate = self
        // Assuming you have a method to get the list of locations
        locations = getLocations()
        tableView.reloadData()
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return locations.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "LocationCell", for: indexPath)
        let location = locations[indexPath.row]
        cell.textLabel?.text = location.name
        cell.detailTextLabel?.text = location.description
        return cell
    }

    private func getLocations() -> [Location] {
        // Replace this with your actual implementation to get the list of locations
        return [
            Location(name: "Location 1", description: "Description 1", coordinates: Coordinates(latitude: 37.7749, longitude: -122.4194)),
            Location(name: "Location 2", description: "Description 2", coordinates: Coordinates(latitude: 34.0522, longitude: -118.2437))
        ]
    }

    struct Location {
        let name: String
        let description: String
        let coordinates: Coordinates
    }

    struct Coordinates {
        let latitude: Double
        let longitude: Double
    }
}
