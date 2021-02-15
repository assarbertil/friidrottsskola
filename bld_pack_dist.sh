# build, pack and dist web site
if [[ -z $1 ]]; then
	echo "Missing host, abort"
	exit 1
else
	TARGET=$1
fi
TARFILE=hfs2021.tar
yarn build
yarn export
rm -f $TARFILE
tar xf $TARFILE out
scp $TARFILE $TARGET

