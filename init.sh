git clone https://github.com/googlei18n/libphonenumber.git

git clone https://github.com/google/closure-library/

git clone https://github.com/google/closure-compiler.git

git clone https://github.com/google/closure-linter.git

git clone https://github.com/google/python-gflags.git

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install ant
brew install maven

./closure-compiler/mvn -DskipTests

ant compile-demo
