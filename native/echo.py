from gi.repository import Gio
import jarabe.config
import logging

import os
from gettext import gettext as _

class Echo:

    def sugar_model(self,args,parent,request):
        value = args[0]
        parent._client.send_result(request, value)
