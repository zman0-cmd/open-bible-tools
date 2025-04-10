# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
Versioning will loosly follow SymVer.

## [0.0.3] - 2025-03-24

### Added - 0.0.3

- Added project metadata, for dynamic changes to project wide code, like footers.
- Added a changelog.
- Default date for plan generation.
- Text of the BSB is formatted in JSON and is stored in the project.
- Empty structures for additional versions of the Bible.

### Changed - 0.0.3

- Theme and CSS are unified for the project.
- Minor theme tweeks across the whole project.
- PDF generation moved to it's own functions.

### Fixed - 0.0.3

- Theme and PDF Generation was broken
- Changelog was updated for a few formatting issues and errors.

### Removed - 0.0.3

-

### Known Issues - 0.0.3

- The theme transition is not good, and is not persistent between page changes.

## [0.0.2] - 2025-03-17

### Added - 0.0.2

- Introduced structured JSON support for Bible data.

### Changed - 0.0.2

- Refacotred much of the code to seperate files so duplicate code is functions that
  can be called by multiple other documents.

### Removed - 0.0.2

- Removed apocrypha options.

## [0.0.1] - 2025-03-11

### Initial Release - 0.0.1

- Example: Basic reading plan generator implemented, initial release.
