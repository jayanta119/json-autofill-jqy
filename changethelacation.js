//change the location browser from https to http;


<script>
if (location.protocol != 'http:')
{
 location.href = 'http:' + window.location.href.substring(window.location.protocol.length);
}
