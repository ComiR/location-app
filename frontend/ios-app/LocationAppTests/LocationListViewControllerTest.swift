import XCTest
@testable import LocationApp

class LocationListViewControllerTest: XCTestCase {

    var viewController: LocationListViewController!

    override func setUp() {
        super.setUp()
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        viewController = storyboard.instantiateViewController(withIdentifier: "LocationListViewController") as? LocationListViewController
        viewController.loadViewIfNeeded()
    }

    override func tearDown() {
        viewController = nil
        super.tearDown()
    }

    func testLocationListDisplay() {
        // Assuming you have a method to get the list of locations
        let locations = viewController.getLocations()

        XCTAssertEqual(viewController.tableView.numberOfRows(inSection: 0), locations.count)

        for (index, location) in locations.enumerated() {
            let cell = viewController.tableView.cellForRow(at: IndexPath(row: index, section: 0))
            XCTAssertEqual(cell?.textLabel?.text, location.name)
            XCTAssertEqual(cell?.detailTextLabel?.text, location.description)
        }
    }
}
