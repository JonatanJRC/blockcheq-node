#!/bin/bash
set -u
set -e

# geth attach ipc:/home/blockcheq/blockcheq/data/geth.ipc
geth attach ipc:/root/blockcheq/data/geth.ipc

set +u
set +e
