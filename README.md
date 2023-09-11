# Subscription Pack Builder

This tool allows you to dynamically add and remove subscription packages and their features. Added subscription packages and their features are saved as a JSON data which can later be used on different platforms.

## Features

- Dynamic addition & removal of packages and features
- Automatic JSON data generation
- Manual JSON data updating
- Responsive design with Bootstrap

## Installation

1. Clone the project from Github: `git clone git@github.com:rtanersonmez/dynamic-subscription-pack-builder.git`
2. Run the project on your local server.

## Usage

1. **Add New Package:** Click on the "Add New Package" button to add a new subscription package.
2. **Add New Feature:** Click on the "Add New Feature" button to add a new feature.
3. **Update JSON:** Click on the "Update Table" button to manually update the existing table.

### Additional Information
- To delete a package or feature, simply add `<button class="btn btn-danger" onclick="deleteFunction(this)">Delete</button>` inside the relevant `<td>`.
- To fetch the generated data, there's a hidden input with the id `jsonData`. This input stores the JSON version of the generated table.

# Contributing

This project is open source. To contribute:

1. Fork the project.
2. Clone it:  `git clone [git@github.com:rtanersonmez/dynamic-subscription-pack-builder.git]`
3. Create a new branch:  `git checkout -b [branch-adınız]`
4. Make your changes and commit:  `git commit -am 'Description about the changes`
5. Push your branch:  `git push origin [branch-adınız]`
6. Create a pull request.

# License

This project is licensed under the MIT License. For more information, see the `LICENSE` file.