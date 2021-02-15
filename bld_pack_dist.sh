# build, pack and dist web site

if [[ -z $1 ]]; then
	echo "Missing host, abort"
	exit 1
else
	TARGET=$1
fi
TARFILE=hfs2021.tgz
yarn build
yarn export
rm -f $TARFILE
tar czf $TARFILE out
scp -i "/C/Program Files/PuTTY/id_rsa" $TARFILE tomas@$TARGET

